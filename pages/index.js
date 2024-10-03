import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (email) {
      setMessage(
        `Obrigado por se inscrever, ${email}! Fique atento ao nosso lançamento.`,
      );
      setEmail(""); // Limpa o campo de email após a inscrição
    } else {
      setMessage("Por favor, insira um email válido.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Universo Paz e Vida</h1>
        <h2 style={styles.subtitle}>Em Breve</h2>
        <p style={styles.description}>
          Prepare-se para uma nova experiência espiritual. Um lugar para se
          conectar, compartilhar e evoluir. O lançamento está próximo, fique
          atento!
        </p>

        {/* Removemos a contagem regressiva para data indefinida */}
        <div style={styles.comingSoon}>Lançamento em breve</div>

        <div style={styles.subscribe}>
          <p>Inscreva-se para ser o primeiro a saber:</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu email"
            style={styles.input}
          />
          <button onClick={handleSubscribe} style={styles.button}>
            Inscrever-se
          </button>
        </div>

        {/* Mostramos a mensagem de sucesso ou erro */}
        {message && <p style={styles.message}>{message}</p>}

        <footer style={styles.footer}>
          <p>Universo Paz e Vida &copy; 2024</p>
        </footer>
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: 0,
    fontFamily: "'Montserrat', sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background:
      "linear-gradient(135deg, rgba(94, 152, 204, 0.7), rgba(40, 116, 166, 0.7)), url(https://unsplash.com/photos/smgTvepind4/download?force=true) no-repeat center center",
    backgroundSize: "cover",
    color: "#fff",
    textAlign: "center",
  },
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "600px",
  },
  title: {
    fontSize: "3rem",
    margin: "0 0 10px",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: 300,
    marginBottom: "20px",
  },
  description: {
    fontSize: "1.2rem",
    fontWeight: 300,
    marginBottom: "30px",
  },
  comingSoon: {
    fontSize: "2.5rem",
    fontWeight: 500,
    marginBottom: "20px",
  },
  subscribe: {
    marginTop: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    width: "70%",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#1ABC9C",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    color: "#fff",
    cursor: "pointer",
  },
  message: {
    marginTop: "20px",
    fontSize: "1.2rem",
    fontWeight: 500,
  },
  footer: {
    marginTop: "30px",
    fontSize: "0.9rem",
  },
};
